var documenterSearchIndex = {"docs":
[{"location":"selections/#selections","page":"Selection functions","title":"Selection functions","text":"","category":"section"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"A simple selection syntax is provided. Use it with, for example: ","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"atoms = select(atoms,\"protein and resnum < 30\")","category":"page"},{"location":"selections/#General-selections","page":"Selection functions","title":"General selections","text":"","category":"section"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"Accepted Boolean operators: and, or, and not. ","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"The accepted keywords for the selection are: ","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"Keyword Options Input value Example\nindex =,>,<,<=,>= Integer index <= 10\nindex_pdb =,>,<,<=,>= Integer index_pdb <= 10\nname  String name CA\nelement  String element N\nresname  String resname ALA\nresnum =,>,<,<=,>= Integer resnum = 10\nresidue =,>,<,<=,>= Integer residue = 10\nchain  String chain A\nmodel  Integer model 1\nb =,>,<,<=,>= Real b > 0.5\noccup =,>,<,<=,>= Real occup >= 0.3\nsegname  String segname PROT\n   ","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"note: Note\nresnum is the residue number as written in the PDB file, while residue is the residue number counted sequentially in the file.index_pdb is the number written in the \"atom index\" field of the PDB file, while index is the sequential index of the atom in the file. ","category":"page"},{"location":"selections/#Special-macros:-proteins,-water","page":"Selection functions","title":"Special macros: proteins, water","text":"","category":"section"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"Just use these keywords to select the residues matching the properties desired. ","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"Examples:","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"aromatic = select(atoms,\"aromatic\")\n","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"aromatic = select(atoms,\"charged\")\n","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"Available keywords:","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"Keywords  \nwater  \nprotein backbone sidechain\nacidic basic \naliphatic aromatic \ncharged neutral \npolar nonpolar \nhydrophobic  \n  ","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"note: Note\nThe properties refer to protein residues and will return false to every non-protein residue. Thus, be careful with the use of not with these selections, as they might retrieve non-protein atoms.","category":"page"},{"location":"selections/#Retrieving-indexes-only","page":"Selection functions","title":"Retrieving indexes only","text":"","category":"section"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"If only the indexes of the atoms are of interest, a specific function will directly return them:","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"indexes = selindex(atoms,\"protein and name CA\")\n","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"note: Note\nAll indexing is 1-based. Thus, the first atom of the structure is atom 1.","category":"page"},{"location":"selections/#Use-Julia-anonymous-functions-directly","page":"Selection functions","title":"Use Julia anonymous functions directly","text":"","category":"section"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"Selections can be done using Julia anonymous functions directly, providing a greater control over the selection and, possibly, the use of user defined selection  functions. For example:","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"atoms = select(atoms, by = atom -> atom.x < 10.)\n","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"With that, selections can become really complex, as:","category":"page"},{"location":"selections/","page":"Selection functions","title":"Selection functions","text":"sel = atom -> (atom.x < 10. && atom.resname == \"GLY\") || (atom.name == \"CA\") \natoms = select(atoms, by = sel )\n","category":"page"},{"location":"auxiliary/#Some-auxiliary-functions-to-quickly-retrieve-some-data","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"","category":"section"},{"location":"auxiliary/#Get-the-protein-sequence","page":"Some auxiliary functions to quickly retrieve some data","title":"Get the protein sequence","text":"","category":"section"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"To obtain a list of the residue names of the protein with three- and one-letter codes, use","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"julia> seq = getseq(\"file.pdb\")\n76×2 Array{String,2}:\n \"VAL\"  \"V\"\n \"LYS\"  \"K\"\n ⋮      \n \"ARG\"  \"R\"\n \"GLY\"  \"G\"\n","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"note: Note\nIf there is some non-standard protein residue in the sequence, inform the getseq function by adding a selection:julia> getseq(\"file.pdb\",\"protein or resname NEW\")\n76×2 Array{String,2}:\n \"VAL\"  \"V\"\n \"NEW\"  \"N\"\n ⋮      \n \"ARG\"  \"R\"\n \"GLY\"  \"G\"","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"The getseq function can of course be used on an Atom list, accepts selections as the last argument, as well as the reading and writing functions:","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"atoms = readPDB(\"file.pdb\")\nseq = getseq(atoms,\"chain A\")\n","category":"page"},{"location":"auxiliary/#Obtain-arrays-with-coordinates","page":"Some auxiliary functions to quickly retrieve some data","title":"Obtain arrays with coordinates","text":"","category":"section"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"All atoms:","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"julia> x = coor(atoms)\n3×1463 Array{Float64,2}:\n  -9.229  -10.048 …    6.408    6.017\n -14.861  -15.427    -12.034  -10.967\n  -5.481   -5.569     -8.343   -9.713\n","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"Or use selections to retrieve the coordinates of subsets of atoms:","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"Calpha coordinates:","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"julia> xCA = coor(atoms,\"name CA\")\n3×104 Array{Float64,2}:\n  -8.483   -5.113  …  12.552   9.196 \n -14.912  -13.737      0.892  -0.734 \n  -6.726   -5.466     -3.466  -4.108 \n","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"By default, the output arrays are column based (the x, y and z coordinates of each atom are in each row). If you want a row-based output, add column_based = false to the input parameters of coor: coor(atoms,column_based=false)","category":"page"},{"location":"auxiliary/#Maximum-and-minimum-coordinates-of-the-atoms","page":"Some auxiliary functions to quickly retrieve some data","title":"Maximum and minimum coordinates of the atoms","text":"","category":"section"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"Use maxmin(atoms), or maxmin(atoms,\"resname CA\"), for example:","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"julia> m = maxmin(atoms,\"chain A\")\n\n Minimum atom coordinates: xmin = [-41.5, -41.526, -41.517]\n Maximum atom coordinates: xmax = [41.583, 41.502, 41.183]\n Length in each direction: xlength = [83.083, 83.028, 82.7]\n","category":"page"},{"location":"auxiliary/","page":"Some auxiliary functions to quickly retrieve some data","title":"Some auxiliary functions to quickly retrieve some data","text":"m is a structure containing the three vectors with minimum and maximum coordinates, and lengths.","category":"page"},{"location":"elements/#Atom-properties","page":"Atom properties","title":"Atom properties","text":"","category":"section"},{"location":"elements/","page":"Atom properties","title":"Atom properties","text":"Some simple atom properties can be retrieved using special functions, which operate on atoms of the type Atom. For example:","category":"page"},{"location":"elements/","page":"Atom properties","title":"Atom properties","text":"julia> atoms = readPDB(\"./file.pdb\");\n\njulia> atoms[1]\n   PDBTools.Atom with fields:\n   index name resname chain   resnum  residue        x        y        z     b occup model segname index_pdb\n       1   OW     SOL     X        1        1   54.370   45.310   33.970  0.00  0.00     1       -         1\n\njulia> mass(atoms[1])\n14.0067\n\njulia> name(atoms[1])\n\"Nitrogen\"\n\njulia> atomic_number(atoms[1])\n7\n\njulia> element(atoms[1])\n\"N\"\n","category":"page"},{"location":"workflow/#Workflows-for-developing-effectivelly-in-Julia","page":"Development workflow","title":"Workflows for developing effectivelly in Julia","text":"","category":"section"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"Variables can be associated to different values any time:","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"data = [ 1, 2, 3 ]\nf(data)\ndata = [ 2, 3, 4 ]\nf(data)","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"Assuming that the data is constant, you could very directly just load a script repeatedly with the analysis and plotting/report functions, as you fiddle with the analysis functions, something as:","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"include(\"set_data.jl\")\ninclude(\"analyze.jl\")\ninclude(\"report.jl\")\n#--- change something in \"analyze.jl\"\ninclude(\"analyze.jl\")\ninclude(\"report.jl\")","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"where the analyze.jl and report.jl files include both the functions and the call to those functions using the data variables. I use that frequently for fast exploration of code.","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"When things get more complicated, you probably want to use Revise (or even before things get complicated). With Revise you can include your script once, and the changes will be tracked automatically. In that case, the call to the functions should be done at the REPL (not included in the scripts). Something like:","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"using Revise\ninclude(\"set_data.jl\")\nincludet(\"analyze.jl\") # note the \"t\", for track\nincludet(\"report.jl\") \n\nresult = analyze(data)\nreport(result)\n\n# Modifity the functions inside analyze.jl and report.jl\n# new run will be automatically with the new versions:\n\nresult = analyze(data)\nreport(result)","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"Some people just use Revise by default. And Revise goes well with modules, in which case, if you had defined a module MyModule in a file MyModule.jl, with the functions of analyze.jl and report.jl, such as","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"module MyModule\n  include(\"analyze.jl\")\n  include(\"report.jl\")\n  export analyze, report\nend","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"loading it with","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"using Revise\nusing MyModule # if you are in the folder where \"MyModule.jl\" is*","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"you will be able to modify the functions inside those files and they will be always be automatically updated at every new call in the REPL. ","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"These options do not work if you redefine a data structure. Then you have to restart over. I usually keep also a script which just runs the above commands to restart the developing section when that is needed, starting julia with julia -i devel.jl.","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"*If you want to load the module from other folder, you need to add that folder to the LOAD_PATH, with:","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":" push!(LOAD_PATH,\"/path/to/MyModule\")","category":"page"},{"location":"workflow/","page":"Development workflow","title":"Development workflow","text":"Further discussion on this topic:  Julia REPL flow coming from Matlab","category":"page"},{"location":"publish_docs/#How-to-deploy-the-documentation-of-a-project","page":"Publish Docs","title":"How to deploy the documentation of a project","text":"","category":"section"},{"location":"publish_docs/#Create-the-TagBot.yml-file","page":"Publish Docs","title":"Create the TagBot.yml file","text":"","category":"section"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"/home/user/.julia/dev/Project/.github/workflows/TagBot.yml","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"and add the content provided here: TagBot.yml example","category":"page"},{"location":"publish_docs/#Use-DocumenterTools-to-generate-the-keys","page":"Publish Docs","title":"Use DocumenterTools to generate the keys","text":"","category":"section"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"import DocumenterTools\nDocumenterTools.genkeys()","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"which will output something like:","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"julia> DocumenterTools.genkeys()\n[ Info: add the public key below to https://github.com/$USER/$REPO/settings/keys with read/write access:\n\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDIIDDRX8DyLG... CCKQPTNei1Ng8b5d+a1ldnVSkgB0= Documenter\n\n[ Info: add a secure environment variable named 'DOCUMENTER_KEY' to https://travis-ci.com/$USER/$REPO/settings (if you deploy using Travis CI) or https://github.com/$USER/$REPO/settings/secrets (if you deploy using GitHub Actions) with value:\n\nLS0tLS1CRUdJTiBPUEVOU1NIIFBSSV... MGtyNng2VWR6WTFxckg1bkUyVGU2ajU3TUdveXpZL1EzTApoNGlqbE5NSWJTOFA2K2JNUkYxVFVCUzdQbC9mZDlTZWJKYTlKdWpMamtnNWRiblJFSkpESmpDTzNzSjZ4d0VCUmV2WmJSCnZtV2lkWkVnQnlPUFVsQUFBQUNrUnZZM1Z0Wlc1MFpYST0KLS0tLS1FTkQgT1BFTlNTSCBQUklWQVRFIEtFWS0tLS0tCg==","category":"page"},{"location":"publish_docs/#Add-the-keys-to-the-github-repository","page":"Publish Docs","title":"Add the keys to the github repository","text":"","category":"section"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"Warning: <s>Be careful to not introduce newlines or any other strange character when copying and pasting the keys. In particular, the secret must be all in one line. That was part of the problem.</s> fixed now by Chistopher","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"The first key, starting with ssh-rsa must be copied as a new \"Deploy key` in the project, at (Currently at:","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"Settings -> Deploy keys -> Add deploy key","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"and the second key has to be copied to:","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"Settings -> Secrets -> New repository secret ","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"with the name DOCUMENTER_KEY.","category":"page"},{"location":"publish_docs/#Deployment-of-the-docs-of-a-previous-version","page":"Publish Docs","title":"Deployment of the docs of a previous version","text":"","category":"section"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"I went to the registered commit, which always have the following information, for example:","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"git tag -a v0.4.11 -m \"<description of version>\" fbeec6a00adbd15053d297542e8354c457b2a610\ngit push origin v0.4.11","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"and created a new tag adding +doc1 to the tag:","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"git tag -a v0.4.11+doc1 -m \"v0.4.11\" fbeec6a00adbd15053d297542e8354c457b2a610\ngit push origin v0.4.11+doc1","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"Then I had to go to the github page -> tags, and publish that release manually.","category":"page"},{"location":"publish_docs/","page":"Publish Docs","title":"Publish Docs","text":"Further discussion: Latest version of docs not published","category":"page"},{"location":"installation/#JuliaCookBook","page":"JuliaCookBook","title":"JuliaCookBook","text":"","category":"section"},{"location":"installation/","page":"JuliaCookBook","title":"JuliaCookBook","text":"This is a cook book of Julia examples, tips and explanations.  ","category":"page"},{"location":"readwrite/#Read-and-write-files","page":"Read and write files","title":"Read and write files","text":"","category":"section"},{"location":"readwrite/#Read-a-PDB-file","page":"Read and write files","title":"Read a PDB file","text":"","category":"section"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"To read a PDB file and return a vector of atoms of type Atom, do:","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"atoms = readPDB(\"file.pdb\")\n","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"Atom is the structure of data containing the atom index, name, residue, coordinates, etc. For example, after reading a file (as shown bellow), a list of atoms with the following structure will be generated:","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"julia> atoms[1]\n   PDBTools.Atom with fields:\n   index name resname chain   resnum  residue        x        y        z     b occup model segname index_pdb\n       1    N     ALA     A        1        1   -9.229  -14.861   -5.481  0.00  1.00     1    PROT         1\n","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"The data in the Atom structure is organized as follows:","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"struct Atom\n  index :: Int64 # The sequential index of the atoms in the file\n  index_pdb :: Int64 # The index as written in the PDB file (might be anything)\n  name :: String\n  resname :: String\n  chain :: String\n  resnum :: Int64 # Number of residue as written in PDB file\n  residue :: Int64 # Sequential residue (molecule) number in file\n  x :: Float64\n  y :: Float64\n  z :: Float64\n  b :: Float64\n  occup :: Float64\n  model :: Int64\n  segname :: String # Segment name (cols 73:76)\nend","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"tip: Tip\nFor all these reading and writting functions, a final argument can be provided to read or write a subset of the atoms, following the selection syntax described  in the Selection section. For example:protein = readPDB(\"file.pdb\",\"protein\")\norarginines = readPDB(\"file.pdb\",\"resname ARG\")\nThe only difference is that, if using Julia anonymous functions, the keyword is only:arginines = readPDB(\"file.pdb\",only = atom -> atom.resname == \"ARG\")\nThe same is valid for the write function, below. ","category":"page"},{"location":"readwrite/#Retrive-from-Protein-Data-Bank","page":"Read and write files","title":"Retrive from Protein Data Bank","text":"","category":"section"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"Use the wget function to retrieve the atom data directly from the PDB database, optionally filtering the atoms with a selection:","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"julia> atoms = wget(\"1LBD\",\"name CA\")\n   Array{Atom,1} with 238 atoms with fields:\n   index name resname chain   resnum  residue        x        y        z     b occup model segname index_pdb\n       2   CA     SER     A      225        1   46.080   83.165   70.327 68.73  1.00     1       -         2\n       8   CA     ALA     A      226        2   43.020   80.825   70.455 63.69  1.00     1       -         8\n      13   CA     ASN     A      227        3   41.052   82.178   67.504 53.45  1.00     1       -        13\n                                                       ⋮\n    1847   CA     GLN     A      460      236  -22.650   79.082   50.023 71.46  1.00     1       -      1847\n    1856   CA     MET     A      461      237  -25.561   77.191   51.710 78.41  1.00     1       -      1856\n    1864   CA     THR     A      462      238  -26.915   73.645   51.198 82.96  1.00     1       -      1864\n","category":"page"},{"location":"readwrite/#Edit-a-PDB-file","page":"Read and write files","title":"Edit a PDB file","text":"","category":"section"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"The Atom structure is mutable, meaning that the fields can be edited. For example:","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"julia> atoms = readPDB(\"file.pdb\")\n   Array{PDBTools.Atom,1} with 62026 atoms with fields:\n   index name resname chain   resnum  residue        x        y        z     b occup model segname index_pdb\n       1    N     ALA     A        1        1   -9.229  -14.861   -5.481  0.00  1.00     1    PROT         1\n       2  HT1     ALA     A        1        1  -10.048  -15.427   -5.569  0.00  0.00     1    PROT         2\n       3  HT2     ALA     A        1        1   -9.488  -13.913   -5.295  0.00  0.00     1    PROT         3\n\njulia> atoms[1].segname = \"ABCD\"\n\"ABCD\"\n\njulia> atoms[1]\n   PDBTools.Atom with fields:\n   index name resname chain   resnum  residue        x        y        z     b occup model segname index_pdb\n       1    N     ALA     A        1        1   -9.229  -14.861   -5.481  0.00  1.00     1    ABCD         1\n","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"Additionally, With the edit! function, you can directly edit or view the data in a vector of Atoms in your preferred text editor. ","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"\njulia> edit!(atoms)\n","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"This will open a text editor, and we changed the data in the resname field of the first atom to ABC. Saving and closing the file will update the atoms array:","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"\njulia> atoms[1]\n   PDBTools.Atom with fields:\n   index name resname chain   resnum  residue        x        y        z     b occup model segname index_pdb\n       1    N     ABC     A        1        1   -9.229  -14.861   -5.481  0.00  1.00     1    PROT         1\n","category":"page"},{"location":"readwrite/#Write-a-PDB-file","page":"Read and write files","title":"Write a PDB file","text":"","category":"section"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"To write a PDB file use the writePDB function, as:","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"writePDB(atoms,\"file.pdb\")\n","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"where atoms contain a list of atoms with the Atom structures.","category":"page"},{"location":"readwrite/#Read-and-write-single-atom-lines","page":"Read and write files","title":"Read and write single-atom lines","text":"","category":"section"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"PDBTools.read_atom(pdb_line): Given a line of a PDB file containing atom data, returns the data in a Atom structure. ","category":"page"},{"location":"readwrite/","page":"Read and write files","title":"Read and write files","text":"PDBTools.write_atom(atom::Atom): Given an atom in the Atom structure, returns a string formatted in the PDB format, to be written to a file. ","category":"page"},{"location":"#PDBTools","page":"Home","title":"PDBTools","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PDBTools is a simple package to read and write Protein Data Bank files, select atoms, and work with their coordinates.  ","category":"page"},{"location":"#Features:","page":"Home","title":"Features:","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Simple data structure: julia> atoms[1]\n  PDBTools.Atom with fields:\n  index name resname chain   resnum  residue        x        y        z     b occup model segname index_pdb\n      1   OW     SOL     X        1        1   54.370   45.310   33.970  0.00  0.00     1       -         1","category":"page"},{"location":"","page":"Home","title":"Home","text":"Selection syntax:resname ARG and name CA","category":"page"},{"location":"","page":"Home","title":"Home","text":"Allows use of Julia (possibly user-defined) functions for selection:atom -> ( atom.resname == \"ARG\" && atom.x < 10 ) || atom.name == \"N\"","category":"page"},{"location":"#Not-indicated-for:","page":"Home","title":"Not indicated for:","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"We do not aim to provide the fastest PDB parsing methods. If speed in reading files, returning subsets of the structures, etc., is critical to you, probably you will do better with some packages of  BioJulia,  BioStructures in particular.","category":"page"}]
}
