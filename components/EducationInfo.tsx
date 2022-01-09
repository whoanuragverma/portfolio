export default function EducationInfo({
    title,
    degree,
    grade,
    achivement,
}: EducationInfoProps) {
    return (
        <div className="mb-5">
            <div className="font-bold">{title}</div>
            <div className="italic">{degree}</div>
            <div className="font-semibold">{grade}</div>
            {achivement?.map((item, idx) => (
                <div key={idx}>{item}</div>
            ))}
        </div>
    );
}
