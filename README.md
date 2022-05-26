

1.)Reserve NFTs 


2.)Setting Base Token URI


3.)mintNFTs 


4.)Mint Single NFT function


5.)Withdraw balance function


Being Creator's of the project we would want to reserve a few NFTs of the collection for the team / events -->
The token ID is 0 before any mint has taken place.


1.) allows us to mint a certain number of NFTs (200) for free. -- anyone calling this function only has to pay gas. 

-> marked as onlyOwner, so that only the owner of the contract will be able to call it.

--check the total number of NFTs-> tokenIds.current()

--check if there are enough NFTs left in the collection for us to reserve

-- If yes, proceed to mint 200 NFTs by calling _mintSingleNFT 200 times.


2.)
single TEST GIF, if it was a folder we would copy the CID for folder URI

NFT metadata @ IPFS URL:
"ipfs:/" --> Mask Collection, if it was a folder we would copy the CID for folder URI


3.) check protocol before we allow the mint to take place:
->enough NFTs left in the collection for the caller to mint the requested amount

--User requests minting more than 0 and less than 10 of NFTs allowed per transaction.

--User has sent 0.15 ETH to mint the requested number of NFTs.



4.)private _mintSingleNFT() function that’s being called whenever we (or a third party) want to mint an NFT.

->get the current ID that hasn’t been minted yet.

-- Use  _safeMint() function to assign the NFT ID to the Users account that would like to mint a Mask

--We increment the token IDs counter by 1.


When called for the first time, newTokenID is 0. safeMint() assigns NFT-> ID 0 to User who called the safeMint function. The counter is then incremented to 1 ==  i+1.

5.) withdraw the ether that has been sent to the contract. --> MASK :) --> This will obviously be marked as onlyOwner. --> Renouncing ownership and giving ownership to automated operations

20% of sales reserved for @_makemamaproud

