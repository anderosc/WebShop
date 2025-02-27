package ee.andero.veebipood_backend.repository;

import ee.andero.veebipood_backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
