import { createReactEditorJS } from 'react-editor-js';
import { EditorConfig } from '@eliascerne/editor/ui';
import dynamic from 'next/dynamic';
import { useRef, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import styles from './EditorUi.module.css';

const EditorJs = dynamic(() => import('react-editor-js') as any, {
  ssr: false,
});

/* eslint-disable-next-line */
export interface EditorUiProps {
  text: any;
  setText: any;
  initialRes?: any;
  initialDate?: any;
}

const ReactEditorJS = createReactEditorJS();

export function EditorUi(props: EditorUiProps) {
  let { text, setText, initialRes, initialDate } = props;

  const [initialTextPass, setInitialTextPass] = useState<any>({
    id: 'erias',
    type: 'paragraph',
    data: {
      text: 'Hey, baby, wanna touch my weiner? ~ Butthead',
    },
  });

  const editorCore = useRef(null);
  const handleInitialize = useCallback((instance: any) => {
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    let editorData: any;
    editorData = editorCore?.current;
    const editorSaveData = await editorData.save();
    setText(editorSaveData.blocks);
  }, []);

  return (
    <div className="text-white">
      {initialRes && (
        <ReactEditorJS
          holder="editor"
          // tools={EditorConfig}
          onInitialize={handleInitialize}
          onChange={handleSave}
          defaultValue={{
            time: 1635603431943,
            blocks: initialRes,
          }}
        />
      )}
    </div>
  );
}

export default EditorUi;
