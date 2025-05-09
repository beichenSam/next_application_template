import Container from "@/components/Container";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </Container>
    </header>
  );
}
