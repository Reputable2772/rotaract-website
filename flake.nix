{
  description = "Next.js Development Shell with MySQL server";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodePackages.nodejs
            pkgs.git
            pkgs.nixfmt-rfc-style
          ];
        };
        formatter = pkgs.nixfmt-rfc-style;
      }
    );
}
