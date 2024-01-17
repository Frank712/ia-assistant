import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextBoxMessageSelectComponent,
  TextMessageBoxComponent,
  TextMessageBoxFileComponent,
  TextMessageBoxSelectedEvent,
  TextMessageEvent,
  TypingLoaderComponent,
} from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextBoxMessageSelectComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {
  public messages = signal<Message[]>([{ text: 'Hello world', isGpt: false }]);
  public isLoading = signal(false);
  public openAiService = inject(OpenAiService);

  handlerMessage(event: string) {
    console.log(event);
  }

  handlerMessageWithFile({ prompt, file }: TextMessageEvent) {
    console.log({ prompt, file });
  }

  handlerMessageWithSelect(event: TextMessageBoxSelectedEvent) {
    console.log({ event });
  }
}
