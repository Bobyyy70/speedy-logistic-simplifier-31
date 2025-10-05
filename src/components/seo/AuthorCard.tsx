import React from "react";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";
import { User, Briefcase, Award } from "lucide-react";

interface AuthorCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  credentials?: string[];
  email?: string;
  url?: string;
  className?: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  role,
  bio,
  image,
  credentials = [],
  email,
  url,
  className
}) => {
  // Generate Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": role,
    "description": bio,
    ...(image && { "image": image }),
    ...(email && { "email": email }),
    ...(url && { "url": url }),
    "worksFor": {
      "@type": "Organization",
      "name": "Speed E-Log"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <div className={cn("flex gap-4 p-6 bg-white dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm", className)}>
        <div className="flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={`Photo de ${name}`}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
            {name}
          </h3>
          <p className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
            <Briefcase className="w-4 h-4" />
            {role}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            {bio}
          </p>
          
          {credentials.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {credentials.map((credential, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                >
                  <Award className="w-3 h-3" />
                  {credential}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
