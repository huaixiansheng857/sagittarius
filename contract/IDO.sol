/**
 *Submitted for verification at BscScan.com on 2021-05-18
*/

/**
 *Submitted for verification at BscScan.com on 2021-05-18
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}
contract Ownable {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor () public {
        address msgSender = msg.sender;
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view  returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner() == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public  onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}

contract IDOontract is Ownable{
    address USDT;
    address SGRToken;
    address defaultAddr;
    uint256 public IDO_Noce;
    
    struct IDO{
        uint256 hasAmount;
        uint256 toAmount;
        uint256 maxBuySGR;
        uint256 startTime;
        uint256 endTime;
        uint256 price;
        mapping(address => uint256) userAmounts;
    }

    mapping(uint256 => IDO) public IDOS;
    
    
    
    function init(address _SGRtoken, address _USDT, address _defaultAddr) public onlyOwner() {
        SGRToken = _SGRtoken;
        USDT = _USDT;
        defaultAddr = _defaultAddr;
    }
    
    function set(uint256 _IDO_Noce, uint256 _startTime, uint256 _endTime, uint256 _price, uint256 _toAmount, uint256 _maxBuySGR) public onlyOwner() {
        IDO storage _IDO = IDOS[_IDO_Noce];
        
        _IDO.startTime = _startTime;
        _IDO.endTime   = _endTime;
        _IDO.price = _price;
        _IDO.toAmount = _toAmount;
        _IDO.maxBuySGR = _maxBuySGR;
    }
    
    function setIDONoce(uint256 _Noce) public onlyOwner() {
        IDO_Noce = _Noce;
    }
    

    function buy(uint256 _amount) public {
        
        IDO storage _IDO = IDOS[IDO_Noce];
        
        
        require(_amount * _IDO.price <= _IDO.maxBuySGR,"error!");
        require(now >= _IDO.startTime,"not begin!");
        require(now < _IDO.endTime, "is end!");
        require(_IDO.userAmounts[msg.sender] + (_amount * _IDO.price) <= _IDO.maxBuySGR,"can't more than max!");
        require(_IDO.hasAmount+_amount <= _IDO.toAmount,"more than max!");
        IERC20(USDT).transferFrom(msg.sender, defaultAddr, _amount);
        IERC20(SGRToken).transfer(msg.sender, _amount * _IDO.price);
        
        _IDO.hasAmount = _IDO.hasAmount + (_amount * _IDO.price);
        _IDO.userAmounts[msg.sender] = _IDO.userAmounts[msg.sender] + (_amount * _IDO.price);
    }

    function getPrice(uint256 _amount) public view returns(uint256){
        IDO memory _IDO = IDOS[IDO_Noce];
        
        return _amount * _IDO.price;
    }
    
    function getUserAmounts(address _user) public view returns(uint256){
        IDO storage _IDO = IDOS[IDO_Noce];
        
        return _IDO.userAmounts[_user];
    }
    
    function getBalance() public onlyOwner{
        uint256 _amount = IERC20(SGRToken).balanceOf(address(this));
        IERC20(SGRToken).transfer(defaultAddr, _amount);
    }

}