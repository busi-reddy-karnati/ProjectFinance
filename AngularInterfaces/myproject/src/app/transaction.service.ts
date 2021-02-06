import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
 
  private _tempurl =  'http://localhost:8080/';
  private _url =      'http://localhost:8080/';

  constructor(private _http : HttpClient) { }

  getTransactions()
  {
     this._url = this._tempurl;
     this._url += 'getAllTransactions';
     return this._http.get<Transaction>(this._url);
  }
}