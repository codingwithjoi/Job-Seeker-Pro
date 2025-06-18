const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">JobSeekerPro</h1>
      <nav>
        <ul className="flex space-x-4 text-sm text-gray-700 dark:text-gray-300">
          <li><a href="#" className="hover:text-blue-500">Dashboard</a></li>
          <li><a href="#" className="hover:text-blue-500">Applications</a></li>
          <li><a href="#" className="hover:text-blue-500">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
