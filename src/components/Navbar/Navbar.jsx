
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import Image from "next/image";

const NavbarComponent = () => {
    return (
        <Navbar fluid rounded>

            <NavbarBrand href="/">
                <Image src="/logo.png" width={40} height={40} alt="Qurbani Hat Logo" className="mr-3 h-6 sm:h-9 w-auto" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Qurbani Hat</span>
            </NavbarBrand>

            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </DropdownHeader>
                    <DropdownItem>Dashboard</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Log out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>

            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink href="all-animals">All Animals</NavbarLink>
                <NavbarLink href="theme-changer">Theme Changer</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default NavbarComponent;