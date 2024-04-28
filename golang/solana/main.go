package main

import (
	"crypto/ed25519"
	"encoding/hex"
	"fmt"
)

func PrivateKeyFromBytes(key []byte) (ed25519.PrivateKey, error) {
	if len(key) != ed25519.PrivateKeySize {
		return nil, fmt.Errorf("Key Length not match")
	}

	privKey := ed25519.PrivateKey(key)

	return privKey, nil
}

func main () {
	priv, err := PrivateKeyFromBytes([]byte{})
	if err != nil {
		fmt.Printf("PrivateKeyFromBytes Error: %v", err)
	}
	privk := hex.EncodeToString(priv)
	fmt.Printf("key: %v", privk)
}

