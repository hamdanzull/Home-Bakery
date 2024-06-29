import { useParams } from "react-router-dom";
import { categoriesData } from "../data/categoryData";

export default function CategoryDetail() {
    const { id } = useParams();
    const category = categoriesData.find((cat) => cat.id === parseInt(id));

    if (!category) {
        return <div className="text-center font-bold text-3xl">Category not found</div>;
    }

    return (
        <section className="category-detail-section p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-6">{category.name}</h2>
            <div className="flex flex-wrap justify-around">
                {category.items.map((item) => (
                    <div key={item.id} className="item w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="p-6 bg-white rounded-lg shadow-lg h-full flex flex-col items-center">
                            <h3 className="text-lg font-semibold mb-4">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}