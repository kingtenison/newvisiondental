"use client"

import { useEffect } from "react"

export default function AtSymbolFontFix() {
  useEffect(() => {
    const wrapAtSymbols = () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (node.textContent?.includes("@")) {
              return NodeFilter.FILTER_ACCEPT
            }
            return NodeFilter.FILTER_REJECT
          }
        }
      )

      const nodesToUpdate: Node[] = []
      let node: Node | null = walker.currentNode
      while (node) {
        nodesToUpdate.push(node)
        node = walker.nextNode()
      }

      nodesToUpdate.forEach(textNode => {
        if (textNode.nodeType === Node.TEXT_NODE) {
          const text = textNode.textContent
          if (!text) return

          const parts = text.split("(@)")
          if (parts.length <= 1) {
            // Also check for standalone @ followed by something
            const parts2 = text.split(/(@[a-zA-Z0-9._-]+)/g)
            if (parts2.length > 1) {
              const parent = textNode.parentNode
              if (!parent) return

              const fragment = document.createDocumentFragment()
              parts2.forEach((part, i) => {
                if (part.startsWith("@")) {
                  const span = document.createElement("span")
                  span.textContent = part
                  span.className = "at-symbol"
                  span.setAttribute("data-at-symbol", "true")
                  fragment.appendChild(span)
                } else if (part) {
                  fragment.appendChild(document.createTextNode(part))
                }
              })
              parent.replaceChild(fragment, textNode)
            }
            return
          }

          const parent = textNode.parentNode
          if (!parent) return

          const fragment = document.createDocumentFragment()
          parts.forEach((part, i) => {
            if (i < parts.length - 1) {
              fragment.appendChild(document.createTextNode(part))
              const span = document.createElement("span")
              span.textContent = "@"
              span.className = "at-symbol"
              span.setAttribute("data-at-symbol", "true")
              fragment.appendChild(span)
            } else {
              fragment.appendChild(document.createTextNode(part))
            }
          })
          parent.replaceChild(fragment, textNode)
        }
      })
    }

    // Run once on mount
    wrapAtSymbols()

    // Also run on DOM changes (for dynamic content)
    const observer = new MutationObserver(wrapAtSymbols)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}
