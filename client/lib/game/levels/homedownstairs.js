ig.module( 'game.levels.homedownstairs' )
.requires('impact.image','game.entities.exit','game.entities.exit','game.entities.exit')
.defines(function(){
LevelHomedownstairs=/*JSON[*/{"entities":[{"type":"EntityExit","x":48,"y":144,"settings":{"me":0,"goTo":2,"map":"Town","direction":"down","type":"floor"}},{"type":"EntityExit","x":32,"y":144,"settings":{"me":1,"goTo":2,"map":"Town","direction":"down","type":"floor"}},{"type":"EntityExit","x":48,"y":48,"settings":{"me":2,"goTo":0,"direction":"up","type":"door","map":"Homeupstairs","animation":"off"}}],"layer":[{"name":"below","width":13,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"media/inside-house.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,56,63,63,181,181,181,63,181,0],[0,181,28,29,222,87,87,148,149,114,115,113,0],[0,189,52,50,246,249,22,156,157,122,123,121,0],[0,21,23,22,24,250,18,151,22,22,22,22,0],[0,21,18,18,18,18,18,3,145,146,18,18,0],[0,21,18,18,18,118,95,155,153,154,119,18,0],[0,21,18,18,18,337,58,59,60,61,339,18,0],[0,21,18,18,18,337,82,83,84,85,339,18,0],[0,21,19,20,18,345,346,346,346,346,347,18,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"collision","width":13,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":true,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,1,0,0,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1,1,1,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1,1,0,0,0,1],[1,0,0,0,0,0,0,1,1,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;
LevelHomedownstairsResources=[new ig.Image('media/inside-house.png')];
});