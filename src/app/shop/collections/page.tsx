import { Collections } from "./collections";


export default function CollectionsPage() {

    const handleChange = (value: any) => {
        console.log(value);
    }

    return (
        <main className="text-black">
            <section className="max-w-6xl m-auto">
                <Collections />
            </section>
        </main>
    )   
}