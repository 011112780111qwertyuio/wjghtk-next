"use client";
import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from '../Toolbar/Toolbar';

const Tiptap = ({ onChange, content, ditls }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    content: ditls || content || "", // Default to ditls, then content, or empty string
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Update editor content if ditls changes
  useEffect(() => {
    if (editor && ditls !== undefined) {
      editor.commands.setContent(ditls); // Set content based on ditls
    }
  }, [ditls, editor]);

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
}

export default Tiptap;
