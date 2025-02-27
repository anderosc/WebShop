package ee.andero.veebipood_backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CategoryController {
    @GetMapping("categories")
    public List<String> getCategories() {
        return new ArrayList<>(Arrays.asList("electronics", "jewelery", "men's clothing", "women's clothing", "phones"));
    }
}
