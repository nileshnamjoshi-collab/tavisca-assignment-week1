import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LinksListService } from './links.service';

describe('LinksListService', () => {
  let service: LinksListService;
  let httpMock: HttpTestingController;
  let dummyAddPosts = [];
  let loginDummyPosts = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [LinksListService],
    });
    service = TestBed.inject(LinksListService);
    httpMock = TestBed.get(HttpTestingController);
    dummyAddPosts = [
      {
        id: '10',
        linksTitle: 'wrestling and martial arts',
        description: 'is an ancient martial arts style of fighting',
        category: 'Dual Linkss',
      },
    ];
    loginDummyPosts = [{ id: '1', username: 'testadmin', password: 'admin' }];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have baseRefUrl', () => {
    expect(service.baseRefUrl).toBeDefined();
  });

  it(`should have baseRefUrl contain 'http://localhost:3000'`, () => {
    expect(service.baseRefUrl).toContain('http://localhost:3000');
  });

  it(`should fetch links as an Observable`, async(
    inject(
      [HttpTestingController, LinksListService],
      (httpClient: HttpTestingController, linkService: LinksListService) => {
        linkService.getLinks().subscribe((links: any) => {
          expect(links.length).toBeGreaterThan(0);
        });

        const req = httpMock.expectOne(linkService.baseRefUrl + '/data');
        expect(req.request.method).toBe('GET');
        req.flush(dummyAddPosts);
        httpMock.verify();
      }
    )
  ));

  it(`should fetch login Details as an Observable`, async(
    inject(
      [HttpTestingController, LinksListService],
      (httpClient: HttpTestingController, linkService: LinksListService) => {
        linkService.getLoginCheck().subscribe((links: any) => {
          expect(links.length).toBeGreaterThan(0);
        });

        const req = httpMock.expectOne(linkService.baseRefUrl + '/login');
        expect(req.request.method).toBe('GET');
        req.flush(loginDummyPosts);
        httpMock.verify();
      }
    )
  ));

  it('should post the link data', () => {
    service.addLink(dummyAddPosts).subscribe((data: any) => {
      expect(data.category).toBe('Dual Links');
    });

    const req = httpMock.expectOne(service.baseRefUrl + '/data');
    expect(req.request.method).toBe('POST');

    req.flush(dummyAddPosts);
    httpMock.verify();
  });

  it('should post the login data', () => {
    service.addLogin(loginDummyPosts).subscribe((data: any) => {
      expect(data.username).toBe('testadmin');
    });

    const req = httpMock.expectOne(service.baseRefUrl + '/login');
    expect(req.request.method).toBe('POST');

    req.flush(loginDummyPosts);
    httpMock.verify();
  });

  it('should put the link data', () => {
    service.updateLink(dummyAddPosts[0]).subscribe((data: any) => {
      expect(data.category).toBe('Dual Links');
    });

    const req = httpMock.expectOne(service.baseRefUrl + '/data/10');
    expect(req.request.method).toBe('PUT');

    req.flush(dummyAddPosts);
    httpMock.verify();
  });

  it('should delete the correct link data', () => {
    service.deleteLinksById(3).subscribe((data: any) => {
      expect(data).toBe(3);
    });

    const req = httpMock.expectOne(service.baseRefUrl + '/data/3');
    expect(req.request.method).toBe('DELETE');

    req.flush(3);
    httpMock.verify();
  });
});
