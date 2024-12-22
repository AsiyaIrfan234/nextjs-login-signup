export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to my Home Page!
      </h1>
      <p className="text-lg text-center mb-8">
        This is the starting point of my website. I have set up a header, navigation bar, and footer, which lay the foundation for my project. Soon, you&apos;ll see more content and pages added!
      </p>
      <div className="flex space-x-4">
        <a
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </a>
        <a
          href="/signup"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
