
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function UserMenu() {
  // Simple placeholder component since we removed authentication
  return (
    <Button variant="outline" size="sm" disabled>
      <User className="mr-2 h-4 w-4" />
      Connexion bientôt
    </Button>
  );
}
