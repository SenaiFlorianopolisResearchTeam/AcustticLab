{
  description = "Nix flake for creating dev shells";
  inputs = {
    systems.url = "github:nix-systems/default";
  };

  outputs =
    { systems
    , nixpkgs
    , ...
    } @ inputs:
    let
      eachSystem = f:
        nixpkgs.lib.genAttrs (import systems) (
          system:
          f nixpkgs.legacyPackages.${system}
        );
    in
    {
      devShells = eachSystem (pkgs: {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Lang tools & deps
            rustup
            rust-analyzer
            nodejs_18
            nest-cli
            yarn

            # External tools
            pgadmin4-desktopmode

            # Article
            texliveMedium
          ];
          packages = with pkgs; [ python311 virtualenv ] ++
            (with pkgs.python311Packages; [ pip ]);
        };
      });
    };
}