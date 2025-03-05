package ee.andero.veebipood_backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Entity
@Getter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private double price;
    @Column(columnDefinition = "varchar(1000)")
    private String description;
    private String category;
    private String image;
    private boolean active;
}
