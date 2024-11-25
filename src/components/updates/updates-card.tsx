interface UpdatesNoteProps {
    version: string;
    title: string;
    description: string;
}

const UpdatesNote: React.FC<UpdatesNoteProps> = ({ version, title, description }) => {
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col gap-4">
                <p className="text-PrimBtn font-medium text-base">
                    {version}
                </p>
                <h3 className="text-primText font-semibold text-xl">
                    {title}
                </h3>
            </div>

            <p className="w-full text-primText text-base font-normal">
                {description}
            </p>
        </div>
    );
};

export default UpdatesNote;
