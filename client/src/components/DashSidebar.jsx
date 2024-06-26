import { Sidebar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div>
      <Sidebar className="w-full md:w-56 min-h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                active={tab === "profile"}
                icon={HiUser}
                label={"User"}
                labelColor="dark"
                as="div"
              >
                Profile
              </Sidebar.Item>
            </Link>
            <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
              Sign out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
