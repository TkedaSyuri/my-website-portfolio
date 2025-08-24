import { Metadata } from "next";
import NavigationBar from "../components/NavigationBar";

export const metadata: Metadata = {
  title: "Takeda Syuri",
  description: "This is Takeda Syuri Blog",
};

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <NavigationBar />
      {children}
    </div>
  );
};

export default ProfileLayout;
