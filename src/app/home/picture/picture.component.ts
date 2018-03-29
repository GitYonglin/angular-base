import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // 获取参数
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
    });
  }

  toText(): void {
    // 对象参数导航
    this.router.navigate(['/home/text', {name: 'TYL'}]);
    // 简单参数和无参数导航
    // this.router.navigateByUrl('/home/text');
  }
}
