import Tag from "../Components/SkillHighlighter.tsx"

export default function Skills(){
    return <>
    <div className="flex flex-col justify-center items-center">
        <h1 className="mt-15">Skills</h1>
        <div className="max-w-[80vw] flex flex-wrap m-20">
            <Tag>
                Hello
            </Tag>
            <Tag>
                Hello
            </Tag>
            <Tag>
                Hello
            </Tag>
        </div>
    </div>
    </>
}