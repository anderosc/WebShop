package ee.andero.veebipood_backend.repository;

import ee.andero.veebipood_backend.entity.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

//faili nimi pole oluline, see kellele me sedda teeme on määratud JpaRepository <KLASS, PRIMAARVVÕTI>
public interface PicturesRepository extends JpaRepository<Picture, Long> {
}
