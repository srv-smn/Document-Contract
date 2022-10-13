//SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./Authorizable.sol";

contract Documents is Authorizable, ReentrancyGuard {


    using Counters for Counters.Counter;
    Counters.Counter private s_certificateIndex;
    string private s_baseURL;
    string[] private s_document;

    event BaseURL(string baseURL);
    event Registered(uint CertificateIndex, string contentURI);

    constructor(string memory _baseURL) {
        s_baseURL = _baseURL;
        emit BaseURL(_baseURL);
    }

    function registerDocument(string[] calldata _hash) public onlyAuthorized nonReentrant{

        for(uint i =0; i < _hash.length; i++){
            uint index = s_certificateIndex.current();
            s_document.push( _hash[i]); 
            s_certificateIndex.increment();
            emit Registered(index, _hash[i]);
        }
        
    }

    function changeBaseURL(string calldata _newURL) public onlyOwner {
        s_baseURL = _newURL;
        emit BaseURL(_newURL);
    }

    function getDocumentDetails(uint[] calldata _certificateID) public view returns(string[] memory){
       string[] memory m_hash = new string[](_certificateID.length);
       uint totalDoc = totalCertificateRegistered();
       string memory m_baseURL = getBaseURL();
       for(uint i =0; i < _certificateID.length; i++){
           require(_certificateID[i] < totalDoc, 'Certificate Id Invalid');
            //m_hash[i] = s_document[_certificateID[i]];
            m_hash[i] = bytes(m_baseURL).length > 0 ? string(abi.encodePacked(m_baseURL, s_document[_certificateID[i]])) : "";
       }
        return m_hash;
    }

    function totalCertificateRegistered() public view returns(uint){
        return s_certificateIndex.current();
    }

    function getBaseURL() public view returns(string memory){
        return s_baseURL;
    }
}