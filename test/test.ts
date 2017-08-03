import { expect } from 'chai';
import ErNumber from '../src';
import 'mocha';


describe('Convet Arabic Numerals To Roman Numerals', () => {

  it('Should know which roman symbols correspond to the given value', () => {
    expect(ErNumber(1)).to.be.equal('I');
    expect(ErNumber(5)).to.be.equal('V');
    expect(ErNumber(10)).to.be.equal('X');
    expect(ErNumber(50)).to.be.equal('L');
    expect(ErNumber(100)).to.be.equal('C');
    expect(ErNumber(500)).to.be.equal('D');
    expect(ErNumber(1000)).to.be.equal('M');
  });

  it('Should know the possible variations', () => {
    expect(ErNumber(4)).to.be.equal('IV');
    expect(ErNumber(9)).to.be.equal('IX');
    expect(ErNumber(40)).to.be.equal('XL');
    expect(ErNumber(90)).to.be.equal('XC');
    expect(ErNumber(400)).to.be.equal('CD');
    expect(ErNumber(900)).to.be.equal('CM');
  });

  it('Should not accept values less than 1 or greather than 3999', () => {
    expect(() => ErNumber(0)).to.throw(/Expected a number between 1 and 3999, received/g);
    expect(() => ErNumber(4000)).to.throw(/Expected a number between 1 and 3999, received/g);
  });

  it('Should convert any given number between 1 and 3999', () => {
    expect(ErNumber(13)).to.be.equal('XIII');
    expect(ErNumber(20)).to.be.equal('XX');
    expect(ErNumber(104)).to.be.equal('CIV');
    expect(ErNumber(3999)).to.be.equal('MMMCMXCIX');
  });

});
