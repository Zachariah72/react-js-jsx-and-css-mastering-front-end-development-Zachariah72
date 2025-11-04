export default function Footer() {
  return (
    <footer className="text-center p-4 mt-10 border-t dark:border-gray-700">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Taskflow. All rights reserved.
      </p>
    </footer>
  );
}
