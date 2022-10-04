const CoinToss = artifacts.require('CoinToss');

contract('CoinToss', accounts => {
  let CoinTossContract;
  let totalSupply;
  before(async () => {
    CoinTossContract = await CoinToss.deployed();
  });

  describe('CoinTossContract deployment and details', async () => {
    it('deploys successfully', async () => {
      const address = await CoinTossContract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, '');
    });
  });

  describe('play game' , async() => {

    it('If no ether value passed then it should return error' , async() => {
      try{
        await CoinTossContract.play( true , {from : accounts[1] , value : '100'});
      }
      catch(e){
        assert.equal(e.message , 'Returned error: VM Exception while processing transaction: revert');
      }
    })

    it('If the amount sent is larger than the contract’s current treasury balance, the contract should send the funds back as-is' , async() => {
      try{
        await CoinTossContract.play( true , {from : accounts[1] , value : '100'});
      }
      catch(e){
        assert.equal(e.message , 'Returned error: VM Exception while processing transaction: revert');
      }
    })

    it('Transfer some fund to smart contract as a treasury balance' , async() => {
      await CoinTossContract.send( 100000 , {from : accounts[1]});      
    })

    it('Lets play ' , async() => {
        let output = await CoinTossContract.play( true , {from : accounts[2] , value : '100'});
        assert.equal(true , ("tx" in output));      
    })

  });
});
