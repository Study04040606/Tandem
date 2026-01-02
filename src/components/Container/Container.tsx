type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
    return <div className="container mx-auto md:px-4">{children}</div>;
}