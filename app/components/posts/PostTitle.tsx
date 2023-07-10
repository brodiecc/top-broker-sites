export default function PostTitle({ children }: any) {
  return (
    <h1 className="text-gray-800 text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center">
      {children}
    </h1>
  );
}
