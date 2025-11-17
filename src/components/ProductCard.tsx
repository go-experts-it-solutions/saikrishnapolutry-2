import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-xs font-medium text-primary mb-2">{product.category}</div>
        <h3 className="text-xl font-semibold mb-2 font-['Playfair_Display']">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/products/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
