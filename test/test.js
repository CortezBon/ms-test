
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe('get all devops msj: ',()=>{
    it('should get all devops msj ', (done) => {
    chai.request(url)
    .get('/devops')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   

// describe('get devops msj with id 1: ',()=>{
//     it('should get the devops msj with id 1', (done) => {
//     chai.request(url)
//     .get('/devops/1')
//     .end( function(err,res){
//     console.log(res.body)
//     expect(res.body).to.have.property('id').to.be.equal(1);
//     expect(res).to.have.status(200);
//     done();
//     });
//     });
//    });
   
   