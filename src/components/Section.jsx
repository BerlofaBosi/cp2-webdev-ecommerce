export default function Section({titulo, children}) {
    return (
        <div>
            <h2 className="w-full flex justify-center bg-black text-white">{titulo}</h2>
            <div className="grid grid-cols-4 gap-6 p-5">
                {children}
            </div>
        </div>
    )
}