import { Metadata } from "next";

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
    <div >
      {children}
    </div>
  );
};

export default ProfileLayout;
