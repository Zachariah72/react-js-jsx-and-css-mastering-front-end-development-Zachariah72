export default function Card({ title, children }) {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white dark:bg-gray-800">
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      {children}
    </div>
  );
}
