# Minecraft docker setup dokumentasjon
Minecraft serveren er satt opp på en datamaskin med ubuntu som står i K6 (2IT sitt klasserom), vi har brukt VS code: remote ssh for å sette opp serveren fra biblioteket fra en laptop.

## Compose fil til docker minecraft-server
compose.yaml
```text
services:
  mc:
    image: itzg/minecraft-server:latest
    container_name: minecraft
    ports:
      - "25565:25565"        # Velger hvilken port som skal brukes(minecraft bruker 25565 som default)
    environment:
      EULA: "TRUE"           # Godkjenner minecraft sin sluttbrukeravtale
      TYPE: "FABRIC"         # Mod loader for minecraft, gir mer muligheter for modifisering
      VERSION: "1.20.1"      # Minecraft-versjon
      MEMORY: "6G"           # Bestemmer hvor mange RAM(GB) minecraft får lov å bruke
      ENABLE_RCON: "true"    # Gir server adminstrator ekstern tilgang til å skrive inn minecraft kommandoer
      RCON_PASSWORD: "minecraft123"
    volumes:
      - ./data:/data         # Her lagres minecraft filene
    restart: unless-stopped  # Gjør at serveren automatisk restarter dersom den crasher
```

## Relevante kommandoer
For å starte, stoppe, og se logg til minecraft serveren, har docker noen egne kommandoer som gjør dette enklere.

### For å starte server:
```text
sudo docker start minecraft
```
### For å stoppe server:
```text
sudo docker stop minecraft
```
### For å se live logg til server:
```text
sudo docker logs -f minecraft
```