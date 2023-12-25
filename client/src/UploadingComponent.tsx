import { FileInput, MultipleFilesInput, UploadError, UploadedFile, useFiles } from "@hilma/fileshandler-client"
import { useState } from "react";

function UploadingComponent() {

    const filesUploader = useFiles();
    const [file, setFile] = useState<UploadedFile | null>(null);

    const handleChange = (value: UploadedFile) => {
        setFile(value);
    }

    const handleError = (err: UploadError) => {
        alert("error:" + err);
    }

    const deleteFile = (fileId?: number) => {
        if (!fileId) return;
        filesUploader.delete(fileId);
        setFile(null);
    }

    return (
        <>
            <h3>single file:</h3>
            <FileInput
                filesUploader={filesUploader}
                type={'image'}
                onChange={handleChange}
                onError={handleError}
            />
            <button
                onClick={() => deleteFile(file?.id)}
            >
                delete file
            </button>
            <img src={file?.link} />

            <h3>
                multiple files:
            </h3>
            <MultipleFilesInput
                type={["file", "image"]}
                filesUploader={filesUploader}
            />
        </>
    )
}

export default UploadingComponent
