package ee.andero.veebipood_backend.controller;

import ee.andero.veebipood_backend.entity.Picture;
import ee.andero.veebipood_backend.entity.Product;
import ee.andero.veebipood_backend.repository.PicturesRepository;
import ee.andero.veebipood_backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") //TODO: Firebase aadress
public class ProductController {
    @Autowired
    private ProductRepository productRepository;
    //Controllerid on front endiga suhtlemiseks
    //Nende sees on API otspunktid, mille poole front end pöördub
    //localhost 8090/products
    @GetMapping("products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @PostMapping("products")
    public List<Product> saveProducts(@RequestBody Product product) {
        productRepository.save(product); //TAGATAUSTAL: INSERT values INTO pictures
        return productRepository.findAll(); //TAGAtaustal: SELECT * FROM pictures

    }
}
