import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from "draftjs-to-html"
import htmlToDraft from 'html-to-draftjs'

export default class RichTextEditor extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editorState: EditorState.createEmpty()
        }

        this.onEditorStateChange = this.onEditorStateChange.bind(this)
    }

    // created this function.
    onEditorStateChange(editorState) {
        this.setState(
            { editorState },
            //when somebody starts typing we then pass in the new editorState
            this.props.handleRichTextEditorChange(
                draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
            )
        )

    }

    render() {
        return (
            <div>
                <Editor
                    editorState={this.state.editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        )
    }
}
