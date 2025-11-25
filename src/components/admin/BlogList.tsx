import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { Blog } from "./BlogManager";

interface BlogListProps {
  blogs: Blog[];
  loading: boolean;
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
}

export const BlogList = ({ blogs, loading, onEdit, onDelete }: BlogListProps) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-2" />
            <div className="h-3 bg-muted rounded w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">{blog.title}</h3>
                <Badge variant={blog.published ? "default" : "secondary"}>
                  {blog.published ? "Published" : "Draft"}
                </Badge>
                {blog.category && (
                  <Badge variant="outline">{blog.category}</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{blog.excerpt}</p>
              <p className="text-xs text-muted-foreground">
                Updated: {new Date(blog.updated_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => onEdit(blog)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(blog.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
