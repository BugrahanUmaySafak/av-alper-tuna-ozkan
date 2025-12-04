import type React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  iconColor?: string;
  className?: string;
}

export default function ContactInfoCard({
  title,
  icon: Icon,
  children,
  iconColor = "text-blue-600",
  className = "",
}: Props) {
  return (
    <Card
      className={`group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="relative pb-2 pt-4">
        <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
          <div className={`flex items-center justify-center ${iconColor}`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-balance">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative text-sm text-muted-foreground leading-relaxed pb-4">
        {children}
      </CardContent>
    </Card>
  );
}
