"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Bold, Italic, List, ListOrdered, Image as ImageIcon, Link as LinkIcon, Heading1, Heading2, Undo, Redo } from 'lucide-react';
import { useEffect, useState } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline',
        },
      }),
    ],
    content: content,
editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4 text-gray-700',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false, // This prevents SSR hydration issues
  });

if (!isMounted) {
    return <div className="h-[400px] bg-[#FFFDF5] rounded-lg animate-pulse"></div>;
  }

  if (!editor) {
    return <div className="h-[400px] bg-[#FFFDF5] rounded-lg animate-pulse"></div>;
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt('Enter URL:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
<div className="border-2 border-[#D4AF37]/20 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-[#D4AF37]/20 bg-[#FFFDF5]">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-[#D4AF37]/10 transition ${editor.isActive('bold') ? 'bg-[#D4AF37]/20 text-[#5C0F22]' : 'text-gray-600'}`}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-[#D4AF37]/10 transition ${editor.isActive('italic') ? 'bg-[#D4AF37]/20 text-[#5C0F22]' : 'text-gray-600'}`}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-[#D4AF37]/20 mx-1"></div>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-[#D4AF37]/10 transition ${editor.isActive('heading', { level: 1 }) ? 'bg-[#D4AF37]/20 text-[#5C0F22]' : 'text-gray-600'}`}
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-[#D4AF37]/10 transition ${editor.isActive('heading', { level: 2 }) ? 'bg-[#D4AF37]/20 text-[#5C0F22]' : 'text-gray-600'}`}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-[#D4AF37]/20 mx-1"></div>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-[#D4AF37]/10 transition ${editor.isActive('bulletList') ? 'bg-[#D4AF37]/20 text-[#5C0F22]' : 'text-gray-600'}`}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-[#D4AF37]/10 transition ${editor.isActive('orderedList') ? 'bg-[#D4AF37]/20 text-[#5C0F22]' : 'text-gray-600'}`}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-[#D4AF37]/20 mx-1"></div>
        <button
          onClick={addImage}
          className="p-2 rounded hover:bg-[#D4AF37]/10 transition text-gray-600"
          title="Add Image"
        >
          <ImageIcon className="w-4 h-4" />
        </button>
        <button
          onClick={addLink}
          className={`p-2 rounded hover:bg-[#D4AF37]/10 transition ${editor.isActive('link') ? 'bg-[#D4AF37]/20 text-[#5C0F22]' : 'text-gray-600'}`}
          title="Add Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-[#D4AF37]/20 mx-1"></div>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 rounded hover:bg-[#D4AF37]/10 transition text-gray-600"
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 rounded hover:bg-[#D4AF37]/10 transition text-gray-600"
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>
      
      {/* Editor Content */}
      <EditorContent editor={editor} className="min-h-[400px]" />
    </div>
  );
}
