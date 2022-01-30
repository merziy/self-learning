import pygame

from utils import load_sprite


class SpaceRocks:
    def __init__(self):
        self._init_pygame()
        # Sets screen size
        self.screen = pygame.display.set_mode((800, 600))
        self.background = load_sprite("milky-way", False)

    def main_loop(self):
        while True:
            self._handle_input()
            self._process_game_logic()
            self._draw()

    def _init_pygame(self):
        # Initialized pygame instance
        pygame.init()
        pygame.display.set_caption("Space Rocks")

    def _handle_input(self):
        # Closes instance
        for event in pygame.event.get():
            if event.type == pygame.QUIT or (
                event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE
            ):
                quit()

    def _process_game_logic(self):
        pass

    def _draw(self):
        self.screen.blit(self.background, (0, 0))
        pygame.display.flip()
