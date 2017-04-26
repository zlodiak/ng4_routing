import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private router: Router) { }

  private id;
  private sub;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
  }

	ngOnDestroy() {
		this.sub.unsubscribe();
	}  

  goBack () {
    this.router.navigate(['/page1']);
  }

}
