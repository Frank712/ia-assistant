import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxSelectedEvent {
  prompt: string;
  selectedOption: string;
}

@Component({
  selector: 'app-text-box-message-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textBoxMessageSelect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBoxMessageSelectComponent {
  @Input({ required: true }) public options!: Option[];
  @Input() public placeholder: string = '';
  @Output() public onMessage = new EventEmitter<TextMessageBoxSelectedEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required],
    selectedOption: ['', Validators.required],
  });

  handleSubmit() {
    if (this.form.invalid) return;
    const { prompt, selectedOption } = this.form.value;
    console.log({ prompt });
    this.onMessage.emit({ prompt: prompt!, selectedOption: selectedOption! });
    this.form.reset();
  }
}
