import Link from 'next/link';

function SideMenu() {
  return (
    <div className="w-64 h-[100vw] bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Menu</h2>
      <ul>
        <li className="mb-2">
          <Link href="/admin">
            <p className="hover:text-gray-400">Products</p>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/adminbillings">
            <p className="hover:text-gray-400">Billings</p>
          </Link>
        </li>
        {/* Add more main menu items here if needed */}
      </ul>
    </div>
  );
}

export default SideMenu;