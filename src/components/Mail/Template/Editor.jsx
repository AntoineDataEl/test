import React, { useCallback, useEffect, useRef } from 'react';
import EmailEditor from 'react-email-editor';

import { useTemplateContent } from '../../../redux/template/hooks';

const Editor = () => {
    const emailEditorRef = useRef(null);
    const [content, setContent] = useTemplateContent();

    const onLoadEditor = useCallback(() => {
        const timer = setInterval(() => {
            if (emailEditorRef && emailEditorRef.current && emailEditorRef.current.editor) {
                const callback = () => emailEditorRef.current.exportHtml(
                    (event) => setContent({ design: event.design, chunks: event.chunks, externalUpdate: false }),
                );

                emailEditorRef.current.editor.addEventListener('design:updated', callback);
                emailEditorRef.current.editor.addEventListener('design:loaded', callback);

                clearInterval(timer);
            }
        }, 500);
    }, [emailEditorRef]);

    useEffect(() => {
        if (content && content.design && content.externalUpdate) {
            emailEditorRef.current.loadDesign(content.design);
        }
    }, [content]);

    return (
        <div className="email-editor">
            <EmailEditor
                minHeight="85vh"
                ref={emailEditorRef}
                projectId={process.env.REACT_APP_UNLAYER_PROJECT_ID}
                onLoad={onLoadEditor}
                options={{
                    locale: 'fr-FR',
                    safeHtml: true,
                    templateId: process.env.REACT_APP_UNLAYER_TEMPLATE_ID,
                    tools: {
                        menu: {
                            enabled: false,
                        },
                    },
                    features: {
                        preheaderText: false,
                        textEditor: {
                            tables: true,
                            emojis: false,
                        },
                    },
                }}
            />
        </div>

    );
};

export default Editor;
